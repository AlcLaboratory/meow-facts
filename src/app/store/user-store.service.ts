import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../intefaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private readonly user = new BehaviorSubject<User>({
    login: '',
    password: '',
  });

  getUser(): User {
    return this.user.getValue();
  }

  setUser(user: User): void {
    this.user.next(user);
  }
}
