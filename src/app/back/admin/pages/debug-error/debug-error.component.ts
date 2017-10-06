import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-debug-error',
	templateUrl: './debug-error.component.html',
	styleUrls: ['./debug-error.component.scss']
})
export class DebugErrorComponent implements OnInit {

	errorList = [
		'2017-02-19 1:55:47 - PHP Warning:  session_start(): open(/tmp/sess_a9d1a3eee2fd606d55d88f7c808d7275, O_RDWR) failed: Permission denied (13) in /home/ocdemo/public_html/system/library/session.php on line 12',
        '2017-02-19 1:55:55 - PHP Warning:  session_start(): open(/tmp/sess_a9d1a3eee2fd606d55d88f7c808d7275, O_RDWR) failed: Permission denied (13) in /home/ocdemo/public_html/system/library/session.php on line 12',
        '2017-02-19 2:13:28 - PHP Warning:  session_start(): open(/tmp/sess_ef5b2fc4c2c656459c1d30efc85ab027, O_RDWR) failed: Permission denied (13) in /home/ocdemo/public_html/system/library/session.php on line 12',
        '2017-02-19 11:33:56 - PHP Notice:  Undefined index: guest in /home/ocdemo/public_html/catalog/controller/checkout/guest_shipping.php on line 84',
        '2017-02-20 16:26:50 - PHP Warning:  session_start(): open(/tmp/sess_e73258ebfc824caa5b611c45229ee0cb, O_RDWR) failed: Permission denied (13) in /home/ocdemo/public_html/system/library/session.php on line 12',
        '2017-02-20 16:27:05 - PHP Warning:  session_start(): open(/tmp/sess_e73258ebfc824caa5b611c45229ee0cb, O_RDWR) failed: Permission denied (13) in /home/ocdemo/public_html/system/library/session.php on line 12',
        '2017-02-21 20:14:31 - PHP Warning:  fopen(/home/ocdemo/public_html/system/cache/cache.store.1487682852): failed to open stream: No such file or directory in /home/ocdemo/public_html/system/library/cache/file.php on line 28',
        '2017-02-21 20:14:31 - PHP Warning:  flock() expects parameter 1 to be resource, boolean given in /home/ocdemo/public_html/system/library/cache/file.php on line 30',
        '2017-02-21 20:14:31 - PHP Warning:  filesize(): stat failed for /home/ocdemo/public_html/system/cache/cache.store.1487682852 in /home/ocdemo/public_html/system/library/cache/file.php on line 32',
        '2017-02-21 20:14:31 - PHP Warning:  fread() expects parameter 1 to be resource, boolean given in /home/ocdemo/public_html/system/library/cache/file.php on line 32',
        '2017-02-21 20:14:31 - PHP Warning:  flock() expects parameter 1 to be resource, boolean given in /home/ocdemo/public_html/system/library/cache/file.php on line 34',
        '2017-02-21 20:14:31 - PHP Warning:  fclose() expects parameter 1 to be resource, boolean given in /home/ocdemo/public_html/system/library/cache/file.php on line 36',
        '2017-02-22 2:16:52 - PHP Notice:  Undefined variable: button_save in /home/ocdemo/public_html/admin/view/template/payment/pp_express.tpl on line 6',
        '2017-02-22 2:16:52 - PHP Notice:  Undefined variable: button_cancel in /home/ocdemo/public_html/admin/view/template/payment/pp_express.tpl on line 7',
        '2017-02-22 2:16:52 - PHP Notice:  Undefined variable: button_search in /home/ocdemo/public_html/admin/view/template/payment/pp_express.tpl on line 7',
        '2017-02-22 2:16:52 - PHP Notice:  Undefined variable: placeholder in /home/ocdemo/public_html/admin/view/template/payment/pp_express.tpl on line 345',
        '2017-02-23 17:43:12 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:43:12 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:43:12 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:43:12 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:43:12 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:43:12 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:43:30 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:43:30 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:43:30 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:43:36 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:43:36 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:43:36 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:45:05 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:45:05 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:45:05 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:45:05 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:45:05 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:45:05 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:45:20 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:45:20 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:45:20 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:45:31 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:45:31 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:45:31 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:45:36 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:45:36 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:45:36 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:46:04 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:46:04 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:46:04 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:46:09 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:46:09 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:46:09 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:46:16 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:46:16 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:46:16 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:46:20 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:46:20 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:46:20 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:48:42 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:48:42 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:48:42 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:48:43 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:48:43 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:48:43 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:49:42 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:49:42 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:49:42 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:50:26 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571',
        '2017-02-23 17:50:26 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 573',
        '2017-02-23 17:50:26 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 588',
        '2017-02-23 17:50:39 - PHP Notice:  Undefined index: product_id in /home/ocdemo/public_html/catalog/controller/product/product.php on line 571'
	];

	constructor() { }

	ngOnInit() {
	}

}
