import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: [],
})
export class ContactPage implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  querySubmitHandler(name, email, query) {
    console.log(name, email, query);

    const formData = {
      name,
      email,
      query
    };

    console.log(formData);

    // 1. send the data to the service
    this.contactService.postQuery(formData)
      .subscribe((res: any) => { // 2. get the resp from service
        console.log(res);
        if (res && res.id) {
          // show toast
        }
      });
    
  }
}
