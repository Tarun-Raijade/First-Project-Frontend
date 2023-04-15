// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class FormService {

//   removeDataTable: any;
//   removeperson(data: any) {
//     throw new Error('Method not implemented.');
//   }
//   private url = '';
//   constructor(private http: HttpClient) {

//       this.url = 'https://localhost:4200';

//   }
//   getSingleperson(id) {
//     return this.http
//       .get(this.url + '/api/persons/' + id, { withCredentials: true })
//       .pipe(
//         map((data) => {
//           return data;
//         })
//       );
//   }

//   updateSingleperson(data,id) {
//     return this.http
//       .put(this.url + '/api/persons/' + id,data, { withCredentials: true })
//       .pipe(
//         map((data) => {
//           return data;
//         })
//       );
//   }
//   getPersonTableList() {
//     return this.http
//       .get(this.url + '/api/persons', { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   removePersonTable(id) {
//     return this.http
//       .delete(this.url + '/api/persons/' + id, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   createPersonTable(data) {
//     return this.http
//       .post(this.url + '/api/persons', data,{ withCredentials: true})
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   getRow(id) {
//     return this.http
//       .get(this.url + '/api/getSingleRow/' + id, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   addRow(data) {
//     return this.http
//       .post(this.url + '/api/addRow', data, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   removeRow(id, tableid) {
//     var str = '/api/deleteRow?Rowid=' + id + '&tableId=' + tableid;
//     return this.http.delete(this.url + str, { withCredentials: true }).pipe(
//       map((list) => {
//         return list;
//       })
//     );
//   }
//   editRow(data) {
//     return this.http
//       .put(this.url + '/api/saveEditedRow', data, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   editPersonTable(data, id) {
//     return this.http
//       .put(this.url + '/api/persons' + id, data, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }

//   getPersonTableRows(Id) {
//     var str = '/api/getRows?id=' + Id;
//     return this.http.get(this.url + str, { withCredentials: true }).pipe(
//       map((list) => {
//         return list;
//       })
//     );
//   }
//   getPersonTable(id) {
//     return this.http
//       .get(this.url + '/api/PersonTables/' + id, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   updatePersonTableColumn(data) {
//     return this.http
//       .post(this.url + '/api/updateColumn', data, { withCredentials: true })
//       .pipe(
//         map((list) => {
//           return list;
//         })
//       );
//   }
//   getSingleRow(id) {
//     var str = '/api/getSingleRow?id=' + id;
//     return this.http.get(this.url + str, { withCredentials: true }).pipe(
//       map((list) => {
//         return list;
//       })
//     );
//   }
//   getViewData(id) {
//     return this.http
//       .get(this.url + '/api/persons/' + id, { withCredentials: true })
//       .pipe(
//         map((data) => {
//           return data;
//         })
//       );
// }


// }
