import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class ComplaintFiles {
  _complaintfiles: any[] = [];

  constructor(public api: Api) { }

  getIndex(params?: any) {
    let seq = this.api.get('complaintfiles', params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
/*
  getAct(params?: any) {
    let seq = this.api.get('complaint_users/show_act', params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getHist(params?: any) {
    let seq = this.api.get('complaint_users/show_hist', params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getIndex(params?: any) {
    let seq = this.api.get('complaint_users', params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
*/
  getShow(params?: any) {
    let seq = this.api.get('complaintfiles/' + params["id"], params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  deleteArchivo(params?: any) {
    let seq = this.api.delete('complaintfiles/' + params["id"], params).share();
    //seq.withCredentials = true
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  patchArchivo(params?: any) {
    let seq = this.api.patch('complaintfiles/' + params["id"], params).share();
    //seq.withCredentials = true
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getNew(params?: any) {
    let seq = this.api.get('complaintfiles/new', params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  postArchivo(params?: any) {
    let seq = this.api.post('complaintfiles', params).share();
    //seq.withCredentials = true
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  /**
   * Process a login/signup response to store user data
   */
  _guardaParam(resp) {
    this._complaintfiles = resp;
  }
}
