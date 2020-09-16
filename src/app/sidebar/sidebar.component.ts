import { Component, OnInit } from '@angular/core';
import {Artikel} from '../artikel/artikel';
import {ARTIKEL} from '../artikel/artikelData';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	Artikel: Artikel[] = ARTIKEL;
  constructor() { }

  ngOnInit() {
	
	
		for (var i = 0; i < Artikel.length; i++) {
						var artObjekt = createArticle(Artikel[i]);
						$("#mainbody").append(artObjekt);
					}

					var sideObjekt = createSidebar();
					$("#sidebar").append(sideObjekt);

					$("#suchbutton").click(
							function(e) {
								e.preventDefault();
								var input = $("#suche").val();
								console.log(input);
								window.location
										.assign("suchergebnis.html?qery="
												+ String(input));
								//$("#suchbutton").attr("formaction", "suchergebnis.html?qery="+input).submit();
								console.log($("#suchbutton").val());

							});
	
  }

}
