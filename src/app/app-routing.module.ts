import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then(mod => mod.SplashModule)
  },
  {
    path: 'business-plan',
    loadChildren: () => import('./business-plan/business-plan.module').then(mod => mod.BusinessPlanModule)
  },
  {
    path: 'mentor-comments',
    loadChildren: () => import('./mentor-comments/mentor-comments.module').then(mod => mod.MentorCommentsModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(mod => mod.ForumModule)
  },
  {
    path: 'forum-post',
    loadChildren: () => import('./forum-post/forum-post.module').then(mod => mod.ForumPostModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
