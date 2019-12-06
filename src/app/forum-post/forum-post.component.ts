import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.scss']
})
export class ForumPostComponent {

  public forumPosts = [
    {
      icon: 'person',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Quis viverra nibh cras pulvinar mattis nunc.`,
      name: 'name'
    }
  ];

  public post() {
    const text = document.getElementById('text-input')['value'];
    this.forumPosts.push({
      icon: 'profile',
      text,
      name: 'Dominique'
    });
    document.getElementById('text-input')['value'] = '';
    setTimeout(() => {
      this.forumPosts.push({
        icon: 'person',
        text: 'Speaking to customers is scary. So before you go out to them, prepare and practice the exact questions you want to ask',
        name: 'name'
      });
    }, 3000);
  }

}
