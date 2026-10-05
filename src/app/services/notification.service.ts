import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSubject = new BehaviorSubject<string>('');
  message$ = this.messageSubject.asObservable();
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  show(message: string): void {
    this.messageSubject.next(message);

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.hideTimer = setTimeout(() => {
      this.messageSubject.next('');
      this.hideTimer = null;
    }, 2400);
  }
}
