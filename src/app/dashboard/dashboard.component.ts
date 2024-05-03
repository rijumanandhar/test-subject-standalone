import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit  {
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
    const updatedUserData = { name: 'Chaeyoung', email: 'chaeyoung@twice.com' };
    this.userService.setUserData(updatedUserData);
  }
}
