import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'admin-dashboard-prospective-label',
	templateUrl: './prospective-label.component.html',
	styleUrls: ['./prospective-label.component.scss']
})
export class ProspectiveLabelComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var sparkLine = function () {
	        $(".sparkline").each(function () {
	            var $data = $(this).data();
	            ($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
	            ($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));

	            $data.valueSpots = {
	                '0:': $data.spotColor
	            };
	            $(this).sparkline($data.data || "html", $data);
	        });
	    };

	    var sparkResize;
	    $(window).resize(function (e) {
	        clearTimeout(sparkResize);
	        sparkResize = setTimeout(function () {
	            sparkLine();
	        }, 500);
	    });
	    sparkLine();

        $('.stat-tab .stat-btn').click(function () {
            $(this).addClass('active');
            $(this).siblings('.btn').removeClass('active');
        });
	}

}
