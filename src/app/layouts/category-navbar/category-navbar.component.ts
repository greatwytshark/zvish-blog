import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import * as M from 'materialize-css';



@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  
  categoryArray!: Array<any>
  
  
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((data) =>{
      this.categoryArray = data;
    })

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });


  }

  

  


}
