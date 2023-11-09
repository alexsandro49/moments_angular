import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormControlDirective,
  Validators,
  FormGroupDirective,
} from "@angular/forms";

import { MomentService } from "src/app/services/moment.service";
import { MessagesService } from "src/app/services/messages.service";
import { CommentService } from "src/app/services/comment.service";

import { Moment } from "src/app/Moment";
import { Comment } from "src/app/Comment";

import { environment } from "src/environments/environment.development";

import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-moment",
  templateUrl: "./moment.component.html",
  styleUrls: ["./moment.component.css"],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  commentForm!: FormGroup;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get("text")!;
  }

  get username() {
    return this.commentForm.get("username")!;
  }

  async removeHander(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.messageService.add("Momento excluído com sucesso!");

    this.router.navigate(["/"]);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);

    await this.commentService
      .createComment(data)
      .subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.messageService.add("Comentário adicionado!");
    this.commentForm.reset();
    formDirective.resetForm();
  }
}
