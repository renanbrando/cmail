import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmail-detalhe-email',
  templateUrl: './detalhe-email.component.html',
  styles: []
})
export class DetalheEmailComponent implements OnInit {
  email = {
    content: "",
    created_at: "",
    from: "",
    id: "",
    subject: "",
    to: "",
    updated_at: ""
  }

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.emailService.get(this.route.snapshot.params['id']).subscribe(res => {
      this.email = res
      console.log(res)
    }, error => console.log(error))
  }

}
