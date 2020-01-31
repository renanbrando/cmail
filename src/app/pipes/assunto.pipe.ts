import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assunto'
})
export class AssuntoPipe implements PipeTransform {

  transform(emailsList: any[], term: string): any {
    if (term && term.trim()) {
      return emailsList.filter(email => {
        return email.content.toLowerCase().includes(term.toLowerCase()) || email.subject.toLowerCase().includes(term.toLowerCase());
      })
    }
    return emailsList
  }

}
