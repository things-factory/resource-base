import gql from 'graphql-tag'

export const EntityColumn = gql`
  type EntityColumn {
    id: String
    domain: Domain
    entity: Entity
    name: String
    description: String
    rank: Int
    term: String
    colType: String
    colSize: Int
    nullable: Boolean
    refType: String
    refName: String
    refUrl: String
    refParams: String
    refRelated: String
    searchRank: Int
    sortRank: Int
    reverseSort: Boolean
    virtualField: Boolean
    searchName: String
    searchEditor: String
    searchOper: String
    searchInitVal: String
    gridRank: Int
    gridEditor: String
    gridFormat: String
    gridValidator: String
    gridWidth: Int
    gridAlign: String
    uniqRank: Int
    formEditor: String
    formValidator: String
    formFormat: String
    defVal: String
    rangeVal: String
    ignoreOnSav: Boolean
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
