import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  userData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Subscribe to changes in user data
    this.userService.getUserData().subscribe(userData => {
      this.userData = userData;
    });
  }

  updateUser(): void {
    // Example of updating user data
    const updatedUserData = { name: 'John Doe', email: 'john@example.com' };
    this.userService.setUserData(updatedUserData);
  }
}
