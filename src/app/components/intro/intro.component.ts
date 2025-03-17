import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})

export class IntroComponent implements OnInit {
  textArray: string[] = ["web applications.", "mobile apps.", "desktop applications."];
  currentText: string = "";
  textIndex: number = 0;
  letterIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100; // Speed for typing each letter
  deleteSpeed: number = 50; // Speed for deleting each letter
  delayBetweenWords: number = 1500; // Delay after typing a full word

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const type = () => {
      const word = this.textArray[this.textIndex];

      if (this.isDeleting) {
        // Delete letters one by one
        this.currentText = word.substring(0, this.letterIndex--);
      } else {
        // Type letters one by one
        this.currentText = word.substring(0, this.letterIndex++);
      }

      let speed = this.isDeleting ? this.deleteSpeed : this.typingSpeed;

      if (!this.isDeleting && this.letterIndex === word.length + 1) {
        // Pause before deleting
        speed = this.delayBetweenWords;
        this.isDeleting = true;
      } else if (this.isDeleting && this.letterIndex === 0) {
        // Move to the next word after deleting
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.textArray.length;
      }

      setTimeout(type, speed);
    };

    type();
  }
}