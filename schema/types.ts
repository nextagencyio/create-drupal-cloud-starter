// Generated GraphQL Schema Types
// This file is auto-generated. Do not edit manually.

export interface GraphQLSchema {
  __schema: {
    types: Array<{
      name: string;
      kind: string;
      description?: string;
      fields?: Array<{
        name: string;
        type: {
          name?: string;
          kind: string;
        };
        description?: string;
      }>;
    }>;
  };
}

// Export the introspection result
export const introspectionResult = {
  "__schema": {
    "queryType": {
      "name": "Query",
      "kind": "OBJECT",
      "__typename": "__Type"
    },
    "mutationType": {
      "name": "Mutation",
      "kind": "OBJECT",
      "__typename": "__Type"
    },
    "subscriptionType": {
      "name": "Subscription",
      "kind": "OBJECT",
      "__typename": "__Type"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "description": "The schema's entry-point for queries.",
        "fields": [
          {
            "name": "node",
            "description": "Load a Node entity by id.",
            "args": [
              {
                "name": "id",
                "description": "The id of the Node to load.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "revision",
                "description": "Optionally set the revision of the entity. Eg current, latest, or an ID.",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "UNION",
              "name": "NodeUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "paragraph",
            "description": "Load a Paragraph entity by id.",
            "args": [
              {
                "name": "id",
                "description": "The id of the Paragraph to load.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "revision",
                "description": "Optionally set the revision of the entity. Eg current, latest, or an ID.",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "UNION",
              "name": "ParagraphUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "term",
            "description": "Load a Term entity by id.",
            "args": [
              {
                "name": "id",
                "description": "The id of the Term to load.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "revision",
                "description": "Optionally set the revision of the entity. Eg current, latest, or an ID.",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "UNION",
              "name": "TermUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "menu",
            "description": "Load a Menu by name.",
            "args": [
              {
                "name": "name",
                "description": "Internal menu name. Eg MAIN",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "MenuAvailable",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "Menu",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "user",
            "description": "Load a User entity by id.",
            "args": [
              {
                "name": "id",
                "description": "The id of the User to load.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "viewer",
            "description": "Get information about the currently authenticated user. NULL if not logged in.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "info",
            "description": "Schema information.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "SchemaInformation",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodeArticles",
            "description": "List of all NodeArticle on the platform.",
            "args": [
              {
                "name": "after",
                "description": "Returns the elements that come after the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "before",
                "description": "Returns the elements that come before the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "first",
                "description": "Returns up to the first n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "last",
                "description": "Returns up to the last n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "reverse",
                "description": "Reverse the order of the underlying list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": "false",
                "__typename": "__InputValue"
              },
              {
                "name": "sortKey",
                "description": "Sort the underlying list by the given key.",
                "type": {
                  "kind": "ENUM",
                  "name": "ConnectionSortKeys",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "NodeArticleConnection",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodeHomepages",
            "description": "List of all NodeHomepage on the platform.",
            "args": [
              {
                "name": "after",
                "description": "Returns the elements that come after the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "before",
                "description": "Returns the elements that come before the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "first",
                "description": "Returns up to the first n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "last",
                "description": "Returns up to the last n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "reverse",
                "description": "Reverse the order of the underlying list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": "false",
                "__typename": "__InputValue"
              },
              {
                "name": "sortKey",
                "description": "Sort the underlying list by the given key.",
                "type": {
                  "kind": "ENUM",
                  "name": "ConnectionSortKeys",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "NodeHomepageConnection",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodePages",
            "description": "List of all NodePage on the platform.",
            "args": [
              {
                "name": "after",
                "description": "Returns the elements that come after the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "before",
                "description": "Returns the elements that come before the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "first",
                "description": "Returns up to the first n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "last",
                "description": "Returns up to the last n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "reverse",
                "description": "Reverse the order of the underlying list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": "false",
                "__typename": "__InputValue"
              },
              {
                "name": "sortKey",
                "description": "Sort the underlying list by the given key.",
                "type": {
                  "kind": "ENUM",
                  "name": "ConnectionSortKeys",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "NodePageConnection",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "termTags",
            "description": "List of all TermTag on the platform.",
            "args": [
              {
                "name": "after",
                "description": "Returns the elements that come after the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "before",
                "description": "Returns the elements that come before the specified cursor.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Cursor",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "first",
                "description": "Returns up to the first n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "last",
                "description": "Returns up to the last n elements from the list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "reverse",
                "description": "Reverse the order of the underlying list.",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": "false",
                "__typename": "__InputValue"
              },
              {
                "name": "sortKey",
                "description": "Sort the underlying list by the given key.",
                "type": {
                  "kind": "ENUM",
                  "name": "ConnectionSortKeys",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TermTagConnection",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "route",
            "description": "Load a Route by path.",
            "args": [
              {
                "name": "path",
                "description": "Internal path to load. Eg /about",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              },
              {
                "name": "revision",
                "description": "Optionally set the revision of the entity. Eg current, latest, or an ID.",
                "type": {
                  "kind": "SCALAR",
                  "name": "ID",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "UNION",
              "name": "RouteUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "ID",
        "description": "The `ID` scalar type represents a unique identifier, often used to\nrefetch an object or as key for a cache. The ID type appears in a JSON\nresponse as a String; however, it is not intended to be human-readable.\nWhen expected as an input type, any string (such as `\"4\"`) or integer\n(such as `4`) input value will be accepted as an ID.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "NodeUnion",
        "description": "Entity type node.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NodeArticle",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodeHomepage",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodePage",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodeArticle",
        "description": "Use <em>articles</em> for time-sensitive content like news, press releases or blog posts.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "author",
            "description": "The author of this content.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "body",
            "description": "Body",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TextSummary",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the node was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The date and time that the content was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "image",
            "description": "Image",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Image",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "Language",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "path",
            "description": "URL alias",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "promote",
            "description": "Promoted to front page",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "sticky",
            "description": "Sticky at top of lists",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "tags",
            "description": "Enter a comma-separated list. For example: Amsterdam, Mexico City, \"Cleveland, Ohio\"",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "UNION",
                  "name": "TermUnion",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "title",
            "description": "Title",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "NodeInterface",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "INTERFACE",
            "name": "EdgeNode",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "NodeInterface",
        "description": "Entity type node.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "author",
            "description": "The author of this content.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the node was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The date and time that the content was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "Language",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "path",
            "description": "URL alias",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "promote",
            "description": "Promoted to front page",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "sticky",
            "description": "Sticky at top of lists",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "title",
            "description": "Title",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NodeArticle",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodeHomepage",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodePage",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "description": "Entity type user.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the user was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The time that the user was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "mail",
            "description": "The email of this user.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Email",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "The name of this user.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "roles",
            "description": "The roles the user has.",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "UserRoles",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Whether the user is active or blocked.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserStatus",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "UserInterface",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "UserInterface",
        "description": "Entity type user.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the user was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The time that the user was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "mail",
            "description": "The email of this user.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Email",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "The name of this user.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "roles",
            "description": "The roles the user has.",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "UserRoles",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Whether the user is active or blocked.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "UserStatus",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "User",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "DateTime",
        "description": "A DateTime object.",
        "fields": [
          {
            "name": "timestamp",
            "description": "Type represents date and time as number of milliseconds from start of the UNIX epoch.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Timestamp",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "timezone",
            "description": "A field whose value exists in the standard IANA Time Zone Database.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "TimeZone",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "offset",
            "description": "A string that will have a value of format ±hh:mm",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "UtcOffset",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "time",
            "description": "RFC 3339 compliant time string.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Time",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Timestamp",
        "description": "Type represents date and time as number of milliseconds from start of the UNIX epoch.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "TimeZone",
        "description": "A field whose value exists in the standard IANA Time Zone Database.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "UtcOffset",
        "description": "A string that will have a value of format ±hh:mm",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Time",
        "description": "RFC 3339 compliant time string.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Email",
        "description": "An email address.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "String",
        "description": "The `String` scalar type represents textual data, represented as UTF-8\ncharacter sequences. The String type is most often used by GraphQL to\nrepresent free-form human-readable text.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "UserRoles",
        "description": "User roles.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "UserStatus",
        "description": "Whether the user is active or blocked.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "ACTIVE",
            "description": "An active user is able to login on the platform and view content",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "BLOCKED",
            "description": "A blocked user is unable to access the platform, although their content will still be visible until it's deleted.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Language",
        "description": "A language definition provided by the CMS.",
        "fields": [
          {
            "name": "id",
            "description": "The language code.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "ID",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "The language name.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "direction",
            "description": "The language direction.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Boolean",
        "description": "The `Boolean` scalar type represents `true` or `false`.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "EdgeNode",
        "description": "This entity is accessible over an Edge connection.",
        "fields": [
          {
            "name": "id",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NodeArticle",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "TermTag",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodeHomepage",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodePage",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "TextSummary",
        "description": "A processed text format with summary defined by the CMS.",
        "fields": [
          {
            "name": "value",
            "description": "The raw text value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "processed",
            "description": "The processed text value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Html",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "format",
            "description": "The text format used to process the text value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "summary",
            "description": "The processed text summary.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Html",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Html",
        "description": "An HTML string\n\nContent of this type is deemed safe by the server for raw output given the\norigin and the context of its usage. The HTML can still contain scripts or style\ntags where the creating user had permission to input these.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Image",
        "description": "A image object to represent an managed file.",
        "fields": [
          {
            "name": "url",
            "description": "The URL of the image.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "width",
            "description": "The width of the image.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "height",
            "description": "The height of the image.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "alt",
            "description": "The alt text of the image.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "title",
            "description": "The title text of the image.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "size",
            "description": "The size of the image in bytes.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "mime",
            "description": "The mime type of the image.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "variations",
            "description": "Image variations control different sizes and formats for images.",
            "args": [
              {
                "name": "styles",
                "description": null,
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "ImageStyleAvailable",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "defaultValue": null,
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ImageStyleDerivative",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Int",
        "description": "The `Int` scalar type represents non-fractional signed whole numeric\nvalues. Int can represent values between -(2^31) and 2^31 - 1. ",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "ImageStyleAvailable",
        "description": "List of image styles available to use.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "LARGE",
            "description": "Large (480×480)",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "MEDIA_LIBRARY",
            "description": "Media Library thumbnail (220×220)",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "MEDIUM",
            "description": "Medium (220×220)",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "THUMBNAIL",
            "description": "Thumbnail (100×100)",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "WIDE",
            "description": "Wide (1090)",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ImageStyleDerivative",
        "description": "ImageStyle derivatives for an Image.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "url",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "width",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "height",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "TermUnion",
        "description": "Entity type taxonomy_term.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "TermTag",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "TermTag",
        "description": "Use tags to group articles on similar topics into categories.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the term was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": "Description",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Text",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "The term language code.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "Name",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "parent",
            "description": "The parents of this term.",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "TermUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "path",
            "description": "URL alias",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "weight",
            "description": "The weight of this term in relation to other terms.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "TermInterface",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "INTERFACE",
            "name": "EdgeNode",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "TermInterface",
        "description": "Entity type taxonomy_term.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the term was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": "Description",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Text",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "The term language code.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "Name",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "parent",
            "description": "The parents of this term.",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "TermUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "path",
            "description": "URL alias",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "weight",
            "description": "The weight of this term in relation to other terms.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "TermTag",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Text",
        "description": "A processed text format defined by the CMS.",
        "fields": [
          {
            "name": "value",
            "description": "The raw text value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "processed",
            "description": "The processed text value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Html",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "format",
            "description": "The text format used to process the text value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodeHomepage",
        "description": "A structured homepage content type with hero section, features, and call-to-action areas.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "author",
            "description": "The author of this content.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the node was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The date and time that the content was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "ctaDescription",
            "description": "Description for the call-to-action section",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Text",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "ctaPrimary",
            "description": "Primary button in the call-to-action section",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Link",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "ctaSecondary",
            "description": "Secondary button in the call-to-action section",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Link",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "ctaTitle",
            "description": "Title for the call-to-action section",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "featuresItems",
            "description": "Individual feature items with structured content",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "UNION",
                  "name": "ParagraphUnion",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "featuresSubtitle",
            "description": "Subtitle for the features section",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Text",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "featuresTitle",
            "description": "Title for the features section",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "heroDescription",
            "description": "The description text displayed in the hero section",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Text",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "heroSubtitle",
            "description": "The subtitle displayed in the hero section",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "heroTitle",
            "description": "The main title displayed in the hero section",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "Language",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "path",
            "description": "URL alias",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "primaryCta",
            "description": "Primary call-to-action button",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Link",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "promote",
            "description": "Promoted to front page",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "secondaryCta",
            "description": "Secondary call-to-action button",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "Link",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "sticky",
            "description": "Sticky at top of lists",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "title",
            "description": "Title",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "NodeInterface",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "INTERFACE",
            "name": "EdgeNode",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Link",
        "description": "A link.",
        "fields": [
          {
            "name": "title",
            "description": "The title of the link.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "url",
            "description": "The URL of the link.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "internal",
            "description": "Whether the link is internal to this website.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "ParagraphUnion",
        "description": "Entity type paragraph.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ParagraphFeatureItem",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ParagraphFeatureItem",
        "description": "A feature item with title and description for marketing pages",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The time that the Paragraph was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "featureDescription",
            "description": "The description of this feature",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Text",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "featureIcon",
            "description": "Enter the name of a Lucide icon (e.g., \"database\", \"zap\", \"shield\"). Browse\navailable icons at <a href=\"https://lucide.dev/icons/\"\ntarget=\"_blank\">https://lucide.dev/icons/</a>",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "featureTitle",
            "description": "The title of this feature",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "The paragraphs entity language code.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ParagraphInterface",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "ParagraphInterface",
        "description": "Entity type paragraph.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The time that the Paragraph was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "The paragraphs entity language code.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ParagraphFeatureItem",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodePage",
        "description": "Use <em>basic pages</em> for your static content, such as an 'About us' page.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "author",
            "description": "The author of this content.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "body",
            "description": "Body",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "TextSummary",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "changed",
            "description": "The time that the node was last edited.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "created",
            "description": "The date and time that the content was created.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "DateTime",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "Language",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "path",
            "description": "URL alias",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "promote",
            "description": "Promoted to front page",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "status",
            "description": "Published",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "sticky",
            "description": "Sticky at top of lists",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "title",
            "description": "Title",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "NodeInterface",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "INTERFACE",
            "name": "EdgeNode",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "MenuAvailable",
        "description": "List of menus available to load.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "MAIN",
            "description": "Main navigation",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Menu",
        "description": "Entity type menu.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "items",
            "description": "The menu items.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MenuItem",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "The menu name.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "MenuInterface",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "MenuInterface",
        "description": "Entity type menu.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "items",
            "description": "The menu items.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MenuItem",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "The menu name.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Menu",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "MenuItem",
        "description": "A menu item defined in the CMS.",
        "fields": [
          {
            "name": "id",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "title",
            "description": "The title of the menu item.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": "The description of the menu item.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "url",
            "description": "The URL of the menu item.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "The language of the menu item.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "Language",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "internal",
            "description": "Whether this menu item links to an internal route.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "expanded",
            "description": "Whether this menu item is intended to be expanded.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "attributes",
            "description": "Attributes of this menu item.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "MenuItemAttributes",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "children",
            "description": "Child menu items of this menu item.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MenuItem",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "route",
            "description": "The route this menu item uses. Route loading can be disabled per menu type.",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "RouteUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "MenuItemAttributes",
        "description": "Menu item options set within the CMS.",
        "fields": [
          {
            "name": "class",
            "description": "Menu item attribute class.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "RouteUnion",
        "description": "Route types that can exist in the system.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RouteInternal",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "RouteExternal",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "RouteInternal",
        "description": "Route within this website.",
        "fields": [
          {
            "name": "url",
            "description": "URL of this route.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "internal",
            "description": "Whether this route is internal or external.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "breadcrumbs",
            "description": "Breadcrumb links for this route.",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Link",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "entity",
            "description": "Content assigned to this route.",
            "args": [],
            "type": {
              "kind": "UNION",
              "name": "RouteEntityUnion",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Route",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "Route",
        "description": "Routes represent incoming requests that resolve to content.",
        "fields": [
          {
            "name": "url",
            "description": "URL of this route.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "internal",
            "description": "Whether this route is internal or external.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "RouteInternal",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "RouteExternal",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "RouteEntityUnion",
        "description": "A list of possible entities that can be returned by URL.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NodeArticle",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodeHomepage",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodePage",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "RouteExternal",
        "description": "Route outside of this website.",
        "fields": [
          {
            "name": "url",
            "description": "URL of this route.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "internal",
            "description": "Whether this route is internal or external.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Route",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "SchemaInformation",
        "description": "Schema information provided by the system.",
        "fields": [
          {
            "name": "description",
            "description": "The schema description.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "home",
            "description": "The internal path to the front page.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": "The site name.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "slogan",
            "description": "The site slogan.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "version",
            "description": "The schema version.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Cursor",
        "description": "A cursor for use in pagination.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "ConnectionSortKeys",
        "description": "Choose how your sorts will occur and on which field.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "CREATED_AT",
            "description": "Sort by creation date",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "UPDATED_AT",
            "description": "Sort by updated date",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "TITLE",
            "description": "Sort by entity title.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "STICKY",
            "description": "Sort by sticky status.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "PROMOTED",
            "description": "Sort by promoted status.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "WEIGHT",
            "description": "Sort by term weight.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodeArticleConnection",
        "description": "A paginated set of results for NodeArticle.",
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NodeArticleEdge",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodes",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NodeArticle",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConnectionPageInfo",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Connection",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "Connection",
        "description": "A paginated set of results.",
        "fields": [
          {
            "name": "edges",
            "description": "The edges of this connection.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "Edge",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodes",
            "description": "The nodes of the edges of this connection.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INTERFACE",
                    "name": "EdgeNode",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageInfo",
            "description": "Information to aid in pagination.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConnectionPageInfo",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NodeArticleConnection",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodeHomepageConnection",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodePageConnection",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "TermTagConnection",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "Edge",
        "description": "An edge in a connection.\nProvides the cursor to fetch data based on the position of the associated\nnode. Specific edge implementations may provide more information about the\nrelationship they represent.",
        "fields": [
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "INTERFACE",
                "name": "EdgeNode",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "NodeArticleEdge",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodeHomepageEdge",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "NodePageEdge",
            "ofType": null,
            "__typename": "__Type"
          },
          {
            "kind": "OBJECT",
            "name": "TermTagEdge",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ConnectionPageInfo",
        "description": "Information about the page in a connection.",
        "fields": [
          {
            "name": "hasNextPage",
            "description": "Whether there are more pages in this connection.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "hasPreviousPage",
            "description": "Whether there are previous pages in this connection.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "startCursor",
            "description": "The cursor for the first element in this page.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Cursor",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "endCursor",
            "description": "The cursor for the last element in this page.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Cursor",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodeArticleEdge",
        "description": "Edge for NodeArticle.",
        "fields": [
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "NodeArticle",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Edge",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodeHomepageConnection",
        "description": "A paginated set of results for NodeHomepage.",
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NodeHomepageEdge",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodes",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NodeHomepage",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConnectionPageInfo",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Connection",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodeHomepageEdge",
        "description": "Edge for NodeHomepage.",
        "fields": [
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "NodeHomepage",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Edge",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodePageConnection",
        "description": "A paginated set of results for NodePage.",
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NodePageEdge",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodes",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "NodePage",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConnectionPageInfo",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Connection",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "NodePageEdge",
        "description": "Edge for NodePage.",
        "fields": [
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "NodePage",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Edge",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "TermTagConnection",
        "description": "A paginated set of results for TermTag.",
        "fields": [
          {
            "name": "edges",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TermTagEdge",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "nodes",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "TermTag",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageInfo",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ConnectionPageInfo",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Connection",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "TermTagEdge",
        "description": "Edge for TermTag.",
        "fields": [
          {
            "name": "cursor",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Cursor",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "node",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "TermTag",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Edge",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "description": "The schema's entry-point for mutations.",
        "fields": [
          {
            "name": "_",
            "description": "Placeholder for mutation extension.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "Subscription",
        "description": "The schema's entry-point for subscriptions.",
        "fields": [
          {
            "name": "_",
            "description": "Placeholder for subscription extension.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "Float",
        "description": "The `Float` scalar type represents signed double-precision fractional\nvalues as specified by\n[IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "__Schema",
        "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        "fields": [
          {
            "name": "types",
            "description": "A list of all types supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "queryType",
            "description": "The type that query operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "mutationType",
            "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "subscriptionType",
            "description": "If this server support subscription, the type that subscription operations will be rooted at.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "directives",
            "description": "A list of all directives supported by this server.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Directive",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "__Type",
        "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        "fields": [
          {
            "name": "kind",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "ENUM",
                "name": "__TypeKind",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "fields",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": "false",
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Field",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "interfaces",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "possibleTypes",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "enumValues",
            "description": null,
            "args": [
              {
                "name": "includeDeprecated",
                "description": null,
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "defaultValue": "false",
                "__typename": "__InputValue"
              }
            ],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__EnumValue",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "inputFields",
            "description": null,
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "__InputValue",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "ofType",
            "description": null,
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "__Type",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "__TypeKind",
        "description": "An enum describing what kind of type a given `__Type` is.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "SCALAR",
            "description": "Indicates this type is a scalar.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "OBJECT",
            "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "INTERFACE",
            "description": "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "UNION",
            "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "ENUM",
            "description": "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "LIST",
            "description": "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "NON_NULL",
            "description": "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "__Field",
        "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "__InputValue",
        "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "type",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "defaultValue",
            "description": "A GraphQL-formatted string representing the default value for this input value.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "__EnumValue",
        "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "isDeprecated",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "deprecationReason",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "__Directive",
        "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        "fields": [
          {
            "name": "name",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": null,
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "args",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "isRepeatable",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "locations",
            "description": null,
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__DirectiveLocation",
                    "ofType": null,
                    "__typename": "__Type"
                  },
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "__DirectiveLocation",
        "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "QUERY",
            "description": "Location adjacent to a query operation.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "MUTATION",
            "description": "Location adjacent to a mutation operation.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "SUBSCRIPTION",
            "description": "Location adjacent to a subscription operation.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "FIELD",
            "description": "Location adjacent to a field.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "FRAGMENT_DEFINITION",
            "description": "Location adjacent to a fragment definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "FRAGMENT_SPREAD",
            "description": "Location adjacent to a fragment spread.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "INLINE_FRAGMENT",
            "description": "Location adjacent to an inline fragment.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "VARIABLE_DEFINITION",
            "description": "Location adjacent to a variable definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "SCHEMA",
            "description": "Location adjacent to a schema definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "SCALAR",
            "description": "Location adjacent to a scalar definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "OBJECT",
            "description": "Location adjacent to an object type definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "FIELD_DEFINITION",
            "description": "Location adjacent to a field definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "ARGUMENT_DEFINITION",
            "description": "Location adjacent to an argument definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "INTERFACE",
            "description": "Location adjacent to an interface definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "UNION",
            "description": "Location adjacent to a union definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "ENUM",
            "description": "Location adjacent to an enum definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "ENUM_VALUE",
            "description": "Location adjacent to an enum value definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "INPUT_OBJECT",
            "description": "Location adjacent to an input object type definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "INPUT_FIELD_DEFINITION",
            "description": "Location adjacent to an input object field definition.",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BetweenFloatInput",
        "description": "Input for filter exposed with operator \"between\".",
        "fields": null,
        "inputFields": [
          {
            "name": "min",
            "description": "The minimum value of the range.",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null,
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          },
          {
            "name": "max",
            "description": "The maximum value of the range.",
            "type": {
              "kind": "SCALAR",
              "name": "Float",
              "ofType": null,
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "BetweenStringInput",
        "description": "Input for filter exposed with operator \"between\".",
        "fields": null,
        "inputFields": [
          {
            "name": "min",
            "description": "The minimum value of the range.",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          },
          {
            "name": "max",
            "description": "The maximum value of the range.",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "DateRange",
        "description": "A Date range has a start and an end.",
        "fields": [
          {
            "name": "start",
            "description": "The start of the date range.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "DateTime",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "end",
            "description": "The end of the date range.",
            "args": [],
            "type": {
              "kind": "OBJECT",
              "name": "DateTime",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "File",
        "description": "A file object to represent an managed file.",
        "fields": [
          {
            "name": "name",
            "description": "The name of the file.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "url",
            "description": "The URL of the file.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "size",
            "description": "The size of the file in bytes.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "mime",
            "description": "The mime type of the file.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": "The description of the file.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ImageStyle",
        "description": "Entity type image_style.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "ImageStyleInterface",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "ImageStyleInterface",
        "description": "Entity type image_style.",
        "fields": [
          {
            "name": "id",
            "description": "The entity ID.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "uuid",
            "description": "The Universally Unique IDentifier (UUID).",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ImageStyle",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "ImageStyleUnion",
        "description": "Entity type image_style.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "ImageStyle",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "KeyValueInput",
        "description": "Generic input for key-value pairs.",
        "fields": null,
        "inputFields": [
          {
            "name": "key",
            "description": null,
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          },
          {
            "name": "value",
            "description": null,
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          }
        ],
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "MenuUnion",
        "description": "Entity type menu.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Menu",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "PhoneNumber",
        "description": "A field whose value conforms to the standard E.164",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "ENUM",
        "name": "SortDirection",
        "description": "Sort direction.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": [
          {
            "name": "ASC",
            "description": "Ascending",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          },
          {
            "name": "DESC",
            "description": "Descending",
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__EnumValue"
          }
        ],
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "UnsupportedType",
        "description": "Unsupported entity or field type in the schema.\nThis entity may not have been enabled in the schema yet and is being referenced via entity reference.",
        "fields": [
          {
            "name": "unsupported",
            "description": "Unsupported type, always TRUE.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "SCALAR",
        "name": "UntypedStructuredData",
        "description": "Untyped structured data. Eg JSON, configuration, settings, attributes.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "UserUnion",
        "description": "Entity type user.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "User",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      },
      {
        "kind": "INTERFACE",
        "name": "View",
        "description": "Views represent collections of curated data from the CMS.",
        "fields": [
          {
            "name": "id",
            "description": "The ID of the view.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "view",
            "description": "The machine name of the view.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "display",
            "description": "The machine name of the display.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "langcode",
            "description": "The language code of the view.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "label",
            "description": "The human friendly label of the view.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": "The description of the view.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageInfo",
            "description": "Information about the page in the view.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "OBJECT",
                "name": "ViewPageInfo",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": [],
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ViewPageInfo",
        "description": "Information about the page in a view.",
        "fields": [
          {
            "name": "offset",
            "description": "Any result offset being used.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "page",
            "description": "The current page being returned.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageSize",
            "description": "How many results per page.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "total",
            "description": "How many results total.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ViewFilter",
        "description": "An exposed filter option for the view.",
        "fields": [
          {
            "name": "id",
            "description": "The filter identifier.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "ID",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "plugin",
            "description": "The filter plugin type.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "type",
            "description": "The filter element type.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "operator",
            "description": "The filter operator.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "label",
            "description": "The filter element label.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "description",
            "description": "The filter element description.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "required",
            "description": "Whether the filter is required.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "multiple",
            "description": "Whether the filter allows multiple values.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "value",
            "description": "The value for the filter. Could be an array for multiple values.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "UntypedStructuredData",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "options",
            "description": "The filter element options if any are defined.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "UntypedStructuredData",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "attributes",
            "description": "The filter element attributes.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "UntypedStructuredData",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "OBJECT",
        "name": "ViewReference",
        "description": "A reference to an embedded view",
        "fields": [
          {
            "name": "view",
            "description": "The machine name of the view.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "display",
            "description": "The machine name of the display.",
            "args": [],
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "contextualFilter",
            "description": "The contextual filter values used.",
            "args": [],
            "type": {
              "kind": "LIST",
              "name": null,
              "ofType": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null,
                  "__typename": "__Type"
                },
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "pageSize",
            "description": "How many results per page.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          },
          {
            "name": "query",
            "description": "The name of the query used to fetch the data, if the view is a GraphQL display.",
            "args": [],
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "isDeprecated": false,
            "deprecationReason": null,
            "__typename": "__Field"
          }
        ],
        "inputFields": null,
        "interfaces": [],
        "enumValues": null,
        "possibleTypes": null,
        "__typename": "__Type"
      },
      {
        "kind": "UNION",
        "name": "ViewResultUnion",
        "description": "All available view result types.",
        "fields": null,
        "inputFields": null,
        "interfaces": null,
        "enumValues": null,
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "UnsupportedType",
            "ofType": null,
            "__typename": "__Type"
          }
        ],
        "__typename": "__Type"
      }
    ],
    "directives": [
      {
        "name": "skip",
        "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Skipped when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          }
        ],
        "__typename": "__Directive"
      },
      {
        "name": "include",
        "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
        "locations": [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT"
        ],
        "args": [
          {
            "name": "if",
            "description": "Included when true.",
            "type": {
              "kind": "NON_NULL",
              "name": null,
              "ofType": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null,
                "__typename": "__Type"
              },
              "__typename": "__Type"
            },
            "defaultValue": null,
            "__typename": "__InputValue"
          }
        ],
        "__typename": "__Directive"
      },
      {
        "name": "deprecated",
        "description": "Marks an element of a GraphQL schema as no longer supported.",
        "locations": [
          "FIELD_DEFINITION",
          "ENUM_VALUE"
        ],
        "args": [
          {
            "name": "reason",
            "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null,
              "__typename": "__Type"
            },
            "defaultValue": "\"No longer supported\"",
            "__typename": "__InputValue"
          }
        ],
        "__typename": "__Directive"
      }
    ],
    "__typename": "__Schema"
  }
} as const;
