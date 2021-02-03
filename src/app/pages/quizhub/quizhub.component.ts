import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavBarComponent} from 'src/app/element/nav-bar/nav-bar.component';
import {ServiceService} from 'src/app/service/service.service';

@Component(
    {selector: 'app-quizhub', templateUrl: './quizhub.component.html', styleUrls: ['./quizhub.component.css']}
)
export class QuizhubComponent implements OnInit {
    data: any;
    subQuiz: any;
    quiz: any;

    constructor(
        private Serviceservice : ServiceService,
        private router : Router,
        private route : ActivatedRoute
    ) {}
    loadComponents = NavBarComponent;
    ngOnInit(): void {

        this
            .route
            .queryParams
            .subscribe((params) => {

                this.data = JSON.parse(params.data);

            });

        const ques = new FormData();
        ques.append('access_key', '6808');
        ques.append('get_questions_by_subcategory', '1');
        ques.append('subcategory', this.data);
        this
            .Serviceservice
            .getquestion(ques)
            .subscribe((event => {
                this.subQuiz = event;
                this.quiz = this.subQuiz.data;;

            }), (err) => {
                console.log(err);

            });

    }

}
