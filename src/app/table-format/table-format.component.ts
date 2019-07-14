import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-format',
  templateUrl: './table-format.component.html',
  styleUrls: ['./table-format.component.css']
})
export class TableFormatComponent implements OnInit {

  dataSet = {
    data: [
      {
        roleId: 1, roleName: 'Admin', roleDescription: 'Admin'
      },
      {
        roleId: 2, roleName: 'Super Admin', roleDescription: 'Super Admin'
      }
    ], permissions: [
      {
        permissionId: 1, permissionName: 'Dashboard', permissionDescription: 'Dashboard'
      },
      {
        permissionId: 2, permissionName: 'Registrations', permissionDescription: 'Registrations'
      },
      {
        permissionId: 3, permissionName: 'Reports', permissionDescription: 'Reports'
      },
      {
        permissionId: 4, permissionName: 'Badge Printing', permissionDescription: 'Badge Printing'
      },
      {
        permissionId: 5, permissionName: 'Manage Users', permissionDescription: 'Manage Users'
      }
    ], rolePermissionMap: [
      {
        rolePermissionMapId: 2, roleId: 1, permissionId: 2
      },
      {
        rolePermissionMapId: 3, roleId: 1, permissionId: 3
      },
      {
        rolePermissionMapId: 4, roleId: 2, permissionId: 1
      },
      {
        rolePermissionMapId: 5, roleId: 2, permissionId: 2
      },
      {
        rolePermissionMapId: 6, roleId: 2, permissionId: 3
      },
      {
        rolePermissionMapId: 7, roleId: 2, permissionId: 4
      },
      {
        rolePermissionMapId: 8, roleId: 2, permissionId: 5
      },
      {
        rolePermissionMapId: 1002, roleId: 1, permissionId: 1
      }
    ]
  };
  roles = this.dataSet.data;
  permissions = this.dataSet.permissions;
  rolePermissionMap = this.dataSet.rolePermissionMap;
  formattedPermissionMap: any = {};

  constructor() { }

  ngOnInit() {

    this.rolePermissionMap.forEach(data => {
      if (this.formattedPermissionMap[data.roleId]) {
        this.formattedPermissionMap[data.roleId].push(data.permissionId);
      } else {
        this.formattedPermissionMap[data.roleId] = [data.permissionId];
      }
    });
    console.log(this.formattedPermissionMap);
  }
  permissionChangeEvent(checkbox: HTMLInputElement, roleId: number, permission: number) {
    console.log(checkbox.checked, roleId, permission);

  }

}
