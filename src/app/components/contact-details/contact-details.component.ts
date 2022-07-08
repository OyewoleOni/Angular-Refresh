import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  public contact: Contact = {} as Contact;
  public contactId : string | null = '';
  public errorMessage: string | undefined;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.contactId = param.get('id');
    })

    this.contactService.getAllContacts().subscribe((data) =>{
      let conntacts: Contact[] = data;
      let selectedContact = conntacts.find(x => x.login.uuid === this.contactId);

      if(selectedContact){
        this.contact = selectedContact;
      }
    })
   

  }
  public isNotEmpty(){
    return Object.keys(this.contact).length > 0;
  }
}
