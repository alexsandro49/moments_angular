import { Component, OnInit } from "@angular/core";

import { MomentService } from "src/app/services/moment.service";
import { MessagesService } from "src/app/services/messages.service";

import { Moment } from "src/app/Moment";
import { ActivatedRoute, Router } from "@angular/router";

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

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }

  async removeHander(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.messageService.add("Momento excluído com sucesso!");

    this.router.navigate(["/"]);
  }
}
