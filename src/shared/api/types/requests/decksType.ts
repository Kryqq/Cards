export type DecksListResponse = {
   items: Item[];
   pagination: Pagination;
   maxCardsCount: number;
};

type Pagination = {
   totalItems: number;
   currentPage: number;
   itemsPerPage: number;
   totalPages: number;
};

type Item = {
   id: string;
   userId: string;
   name: string;
   isPrivate: boolean;
   cover?: string;
   created: string;
   updated: string;
   cardsCount: number;
   author: Author;
};

type Author = {
   id: string;
   name: string;
};
