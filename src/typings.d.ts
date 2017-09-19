/* SystemJS module definition */
declare var module: NodeModule;
declare var Gauge: any;
declare var Morris: any;
declare var Raphael: any;
declare var moment: any;
declare var EasyPieChart: any;
declare var Skycons: any;

interface NodeModule {
  id: string;
}

interface JQueryStatic {
    plot: any;
}

interface JQuery {
	vectorMap: any;
	sparkline: any;
	clndr: any;
}