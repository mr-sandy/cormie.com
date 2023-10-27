# Notes

## To Do
Services
- Client 
- Client Operations (including client store lists, client search terms)
- Retailers (including retailer stores, retailer categories)
- Seeds

Step by step
- Create a scheduling project?
- Add a react app
- Add content negotiation
- Add routes with services and repositories
- Add test for service
- Add react component for view

Stories
1. Add a client
2. List cl


## Client Config Service

### Resources

#### Clients

GET /clients - returns a list of clients
[
    {
        id: 1,
        name: "client 1"
    },
    {
        id: 2,
        name: "client 2",
    }
]


GET /clients/{id} - returns a client
{
    id: 1,
    name: "client 1"
}


#### Client Operations

GET /clients/{id}/operations - returns a list of all operations for a client
[
    {
        id: 1,
        type: "category",
        retailer: "/retailers/amazon-us",
        category: "/retailers/amazon-us/categories/124",
        links: [
            {
                rel: "self",
                url: "/clients/1/operations/123"
            },
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    },
    {
        id: 2,
        type: "category",
        retailer: "/retailers/walmart-us,
        category: "/retailers/walmart-us/categories/234,
        stores: {
            type: "single",
            store: "/retailers/walmart/stores/12"
        }
        links: [
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    },
    {
        id: 21,
        type: "category",
        retailer: "/retailers/walmart-us,
        category: "/retailers/walmart-us/categories/234,
        stores: {
            type: "multi",
            storeList: "/retailers/walmart-us/storelists/123"
        },
        links: [
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    },
    {
        id: 3,
        type: "search",
        retailer: "/retailers/amazon-us,
        search: {
            type: "list",
            searchTerms: "/clients/1/search-terms/14,
        }
        links: [
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    },
    {
        id: 5,
        type: "search",
        retailer: "/retailers/amazon-us,
        search: {
            type: "single",
            searchTerms: "cheese",
        }
        maxDepth: 3,
        links: [
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    },
    {
        id: 7,
        type: "detail",
        retailer: "/retailers/amazon-us,
        product: {
            id: "546786"
        }
        links: [
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    }

]

#### Retailer Stores
GET /retailers/{id}/stores
GET /retailers/{id}/stores/{id}
{
    id: 1232,
    name: "",
    location: {}
    status: "active|inactive"
    ...
}

#### Retailer Stores Lists
GET /retailers/{id}/storelists
[
    {
        id: allstores,
        name: "all stores"
    },
    {
        id: 233,
        name: "Tesco Extras"
    }

]
GET /retailers/{id}/storelists/all-stores
GET /retailers/{id}/storelists/123


#### Client Store Lists
GET /clients/{id}/storelists
GET /clients/{id}/storelists/{id}
{
    id: 123,
    name: "new york walmarts"
    retailer: "/retailers/walmart-us"
    stores: [
        "/retailers/walmart-us/stores/123",
        "/retailers/walmart-us/stores/234",
        "/retailers/walmart-us/stores/345"
    ]
}

#### Retailers

GET /retailers - returns a list of all retailers
GET /retailers/{id} - returns a retailer
{
    retailer: "amazon-us",
    multistore: true,
    banners: false
}

#### Retailer categories

GET /retailers/{id}/categories
[
    {
        id: "4567",
        name: "Beverages",
        status: "active|inactive"
        links: [
            {
                rel: 'child'.
                url: "/retailers/amazon-us/categories/123
            },
            {
                rel: 'child'.
                url: "/retailers/amazon-us/categories/234
            },
            {
                rel: 'parent'.
                url: "/retailers/amazon-us/categories/012
            }
        ]
    },
    {
        id: "567",
        name: "Dairy",
        links: [
            {
                rel: 'child'.
                url: "/retailers/amazon-us/categories/123
            }
        ]
    }
]

/retailers/{id}/categories/{category id} - returns a category

#### Client search terms
GET /clients/{id}/search-terms
GET /clients/{id}/search-terms/{id}

#### Seeds
GET /seeds
GET /seeds/{id}
{
    id: "4567"
    type: "category",
    retailer: "/retailers/walmart-us,
    category: "/retailers/walmart-us/categories/234,
    stores: {
        type: "single",
        store: "/retailers/walmart/stores/12"
    }
    links: [
        {
            rel: "client-operation",
            url: "/clients/1/operations/123"
        },
        {
            rel: "client-operation",
            url: "/clients/3/operations/12"
        }
    ]
}

POST /seeds
{
    change: "operation-added", // "operation-updated", "operation-deleted"
    operation: {
        id: 1,
        type: "category",
        retailer: "/retailers/amazon-us",
        category: "/retailers/amazon-us/categories/124",
        links: [
            {
                rel: "self",
                url: "/clients/1/operations/123"
            },
            {
                rel: "client",
                url: "/clients/1"
            }
        ]
    },
}


/clients/pepsi-uk/searchTerms/123

{
    id: 123
    name: "Pespi main brands"
    terms: [
        "Pepsi",
        "Pepsi Max",
        "Pepsi Clear"
    ]
}
                    