import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationType?: SortOrder;
  updatedAt?: SortOrder;
};
