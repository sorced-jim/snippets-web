// This snippet file was generated by processing the source file:
// ./analytics-next/ecommerce.js
//
// To make edits to the snippets in this file, please edit the source

// [START analytics_ecommerce_refund_modular]
import { getAnalytics, logEvent } from "firebase/analytics";

// Prepare ecommerce params
const params11 = {
  transaction_id: 'T12345', // Required
  affiliation: 'Google Store',
  currency: 'USD',
  value: 9.99,
  items: []
};

// (Optional) For partial refunds, define the item_id and quantity of refunded items
const refundedProduct = {
  item_id: 'SKU_123', // Required
  quantity: 1 // Required
};

params11.items.push(refundedProduct);

// Log event
const analytics = getAnalytics();
logEvent(analytics, 'refund', params11);
// [END analytics_ecommerce_refund_modular]