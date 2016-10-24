import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user';
import { UserService } from '../../services/service_user/service_user';

@Component({
    moduleId: module.id,
    selector: 'mod_admin_table_manager_user',
    templateUrl: 'mod_admin_table_manager_user.component.html'
})
export class ModAdminTableManagerUserComponent implements OnInit {
    list_user: User[];
    constructor(private service_user: UserService) {
        //Sắp xếp giá tăng dần
        // this.service_user.getListUserPromise().then(list => this.list_user = list.sort((item1, item2) => item1.user_id - item2.user_id));
     }

    ngOnInit() { }
}