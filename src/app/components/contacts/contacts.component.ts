import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts:Contact[] = [] as Contact[];
  public errorMessage: string | undefined;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data) => {
        this.contacts = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }

  public selectContact(conntact: Contact){

  }
}
