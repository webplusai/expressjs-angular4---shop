import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CRUDService {

	private endPoint = 'api/crud';

	constructor(private http: HttpClient) { }

	create( data ): Observable<any> {
		return this.http.post<any>( this.endPoint, data, httpOptions );
	}

	retrieve( model ): Observable<any> {
		return this.http.get<any>( this.endPoint + '?model=' + model );
	}

	retrieveCondition( model, condition ): Observable<any> {
		return this.http.get<any>( this.endPoint + '?model=' + model + '&condition=' + condition);
	}

	retrieveOne( model, id ): Observable<any> {
		return this.http.get<any>( this.endPoint + '/' + id + '?model=' + model );
	}

	update( data, id ): Observable<any> {
		return this.http.put<any>( this.endPoint + '/' + id, data, httpOptions );
	}

	/*delete( data ): Observable<any> {

	}*/
}
