# Security Specification for Indo-Farm

## 1. Data Invariants
- A **Product** can only be created or modified by an Admin.
- An **Order** must belong to a signed-in user. Users can only read their own orders.
- An **Order** cannot be updated after it reaches 'delivered' status, except by an Admin.
- A **User** profile can only be read or written by the owner (userId matches auth.uid).
- A **Review** must reference a valid product and the userId must match the authenticated user.
- **Admin** access is restricted to users listed in a secure 'admins' collection or via a specific field check (though rules instructions prefer a separate collection or secure check). I will use the `exists(/databases/$(database)/documents/admins/$(request.auth.uid))` pattern as per instructions.

## 2. The "Dirty Dozen" Payloads (Denial Tests)
1. **Malicious Product Create**: User attempts to create a product with `isAdmin: true` override.
2. **Identity Spoofing (Order)**: User A tries to create an order for User B by setting `userId: "UserB"`.
3. **Price Poisoning**: User tries to update a product's price to 0.01.
4. **Massive ID injection**: User tries to create a product with a 2KB string as ID.
5. **PII Leak**: User A tries to read User B's profile.
6. **Orphaned Review**: User tries to post a review for a non-existent `productId`.
7. **Ghost Field Update**: User tries to add `isVIP: true` to their user document.
8. **Status Bypass**: User tries to set their order status straight to `delivered`.
9. **Terminal State Edit**: User tries to edit a `delivered` order.
10. **Query Scraper**: Unauthenticated user tries to list all products. (Products are public read, but I'll check list logic).
11. **Negative Stock**: Admin (or hacker) tries to set product stock to -100.
12. **Role Escalation**: User tries to update their own `role` field to 'admin'.

## 3. Test Invariants
All write operations must pass `isValid[Entity]()` schema checks.
All list operations must be secured by `resource.data` filters.
Admin checks must be strictly enforced for catalog management.
