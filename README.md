# Introduction

Yibas is an fully featured solution used to increase sales and reduce cost.

# Topics

- [Git Workflow](#git-workflow)
- [Client](#client)
    - [Components](#components)
        - [Dialog System Lookup](#dialog-system-lookup)
        - [Field Update Lookup](#field-update-lookup)
        - [Multi System Lookup](#multi-system-lookup)
        - [SideNav](#sidenav)
- [Error handling](#error-handling)
- [Development](#development)
    - [Testing](#testing)

# Git Workflow
Testing

# Client

This section contains code references and documentation specific to the client.

## Components
### System Lookup

The System Lookup component is used to display data to the data table generated by the methods from the database.

#### Component properties

#### Instruction for database
*Properties*

| Name | Description |
| ----:| --- |
| name | Name of the lookup |
| label | Extra field to put distinguish the lookup (optional) |
| path | The path of the page url, help to find the lookup easier (optional) |
| searchable | Decide if the lookup is able to search |
| subscriptions | Array of subscriptions to update the lookup data whenever data got changed from the database |
| [subscriptions](#subscriptions) | Array of subscriptions to update the lookup data whenever data got changed from the database |
| [methods](#methods) | Array of subscriptions to update the lookup data whenever data got changed from the database |


#### subscriptions
subscriptoins is an array of objects used to reactively retrieve data from the database whenever data get updated.

| Name | Description |
| ----:| --- |
| name | Name of the subscription |
| [args](#args) | Array of objects used to store query method or pipeline |

#### args
args can be either array of objects or an object.

*Properties*

| Name | Description |
| ----:| --- |
| name | Name (type) of this object, can be "query", "pipeline", "update". |
| value | Used to store pipeline, query, so on and so forth |
| params | Used to store parameters |


#### methods


*Properties*

| Name | type | Description |
| ----:| --- | --- |
| isHeader | boolean | Used to decide if it is the first method to query data | work
| name | string | name of this method |
| type | string | type of this method |
| collectionName | string | name of the collection used to start aggregate or find |
| [args](#args) | Array | Array of objects used to store query method or pipeline |
| value | Object |Used to store pipeline, query, so on and so forth |
| [return](#return) | Object |Used to define the action of this method when data are fetched |

### return

| Name | type | Description |
| ----:| --- | --- |
| next | boolean | Used to indicate if there is next method needs to be run |
| nextMethodIndex | number | index of the next method |
| dataType | string | Can be 'object' or 'array', now it is only 'object' |
| as | string | Name of the result, will be used in the next method |

### dataTable

| Name | type | Description |
| ----:| --- | --- |
| [options](#options)| object | Used to define the configuration of the data table |
| [columns](#columns) | array | Array of columns that will be displayed to the data table |

### options

| Name | type | Description |
| ----:| --- | --- |
| [options](#options)| object | Used to define the configuration of the data table |
| [columns](#columns) | array | Array of columns that will be displayed to the data table |



### Dialog System Lookup

The Dialog System Lookup component is used to display a lookup from a standard lookup control. This component is used to retrieve a single document from a collection.

*Properties*

| Name | Description |
| ----:| --- |
| Collections | An array containing the collections that are used in the lookup. |
| lookupName | A string containing the name of the lookup corresponding to the name field in the systemLookups collection. |

*Example*

The following example shows the three parts required in order to create a basic customer lookup.

Here's the HTML

```html
<dialog-system-lookup [Collections]="customerCollections" [lookupName]="customerLookupName"></dialog-system-lookup>
```

Here's the Javascript

```javascript
import { Component, OnInit } from '@angular/core';
import { Customers } from customer;
import template from customers-quote;
import style from customers-quote;

@Component({
  selector: 'sample-task',
  template,
  styles: [ style ]
})

export class SampleComponent implements OnInit {
  customerCollections: any[];
  customerLookupName: string;

  constructor() {}

  ngOnInit() {
    this.customerCollections = [Customers];
    this.customerLookupName = customer;
  }
}
```

Here's the document
```javascript
{
    "_id" : "jLuoaqfQru7hoZcVs",
    "name" : "customers",
    "collection" : "customers",
    "label" : "Customer",
    "searchable" : true,
    "single" : {
        "returnedFields" : [
            "customer",
            " - ",
            "name"
        ],
        "findOptions" : {
            "fields" : {
                "customer" : NumberInt(1),
                "zipCode" : NumberInt(1),
                "name" : NumberInt(1),
                "city" : NumberInt(1),
                "state" : NumberInt(1),
                "tenantId" : NumberInt(1)
            },
            "sort" : {
                "customer" : NumberInt(1)
            },
            "limit" : NumberInt(10),
            "skip" : NumberInt(0)
        }
    },
    "dataTable" : {
        "table" : {
            "columnMode" : "force",
            "selectionType" : "single"
        },
        "columns" : [
            {
                "prop" : "customer",
                "name" : "Number",
                "hidden" : false,
                "returned" : true
            },
            {
                "prop" : "name",
                "name" : "Customer Name",
                "hidden" : false,
                "returned" : true,
                "width" : NumberInt(200)
            },
            {
                "prop" : "zipCode",
                "name" : "Zip Code",
                "hidden" : false
            },
            {
                "prop" : "city",
                "name" : "City",
                "hidden" : false
            },
            {
                "prop" : "state",
                "hidden" : false,
                "label" : "State"
            }
        ]
    },
    "returnedFields" : [
        "customer",
        " - ",
        "name"
    ],
    "findOptions" : {
        "fields" : {
            "customer" : NumberInt(1),
            "zipCode" : NumberInt(1),
            "name" : NumberInt(1),
            "city" : NumberInt(1),
            "state" : NumberInt(1),
            "tenantId" : NumberInt(1)
        },
        "sort" : {
            "customer" : NumberInt(1)
        },
        "limit" : NumberInt(10),
        "skip" : NumberInt(0)
    },
    "dataTableOptions" : {
        "columnMode" : "flex",
        "selectionType" : "multiClick"
    },
    "dataTableColumns" : [
        {
            "prop" : "customer",
            "name" : "Number",
            "hidden" : false,
            "returned" : true
        },
        {
            "prop" : "name",
            "name" : "Customer Name",
            "hidden" : false,
            "returned" : true,
            "width" : NumberInt(200)
        },
        {
            "prop" : "zipCode",
            "name" : "Zip Code",
            "hidden" : false
        },
        {
            "prop" : "city",
            "name" : "City",
            "hidden" : false
        },
        {
            "prop" : "state",
            "hidden" : false,
            "label" : "State"
        }
    ],
    "tenantId" : "4sdRt09goRP98e456",
    "updatedUserId" : "",
    "createdUserId" : "",
    "updatedAt" : ISODate("2017-03-06T14:54:14.294+0000"),
    "createdAt" : ISODate("2017-03-06T14:54:14.294+0000")
}
```


### Field Update Lookup

### Multi System Lookup

### SideNav

# Error handling

# Development

## Testing
