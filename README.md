# account-api


1. Get All Accounts
Endpoint: GET /api/v1/accounts
Description: Retrieve a list of all accounts.
Response: Array of account objects.

2. Create Account
Endpoint: POST /api/v1/accounts
Request Body: { "id": <accountId>, "name": <accountname>,"cash": <initialCash>,"credit": <initialCredit> }
Description: Creates new account with AccNum, name, cash and credit (default 0) .
Response: Created account object.

3. Get Account by id
Endpoint: GET /api/v1/accounts/:id
Parameters: id (Account id)
Description: Retrieve account by their id.
Response: Account object.

4. Update Account
Endpoint: POST /api/v1/accounts/update/:id
Parameters: id (Account id)
Request Body: { "name": <accountname>,"cash": <initialCash>,"credit": <initialCredit> }
Description: Update existing account.
Response: Updated account object.

5. Deposit to Cash
Endpoint: PUT /api/v1/accounts/deposit/:id
Parameters: id (Account id)
Request Body: { "money": <depositMoney> }
Description: Deposit money to a account's cash balance.
Response: Updated account object.

6. Update Credit
Endpoint: PUT /api/v1/accounts/update-credit/:id
Parameters: id (Account id)
Request Body: { "money": <newCredit> }
Description: Update account's credit balance.
Response: Updated account object.

7. Withdraw from Cash
Endpoint: PUT /api/v1/accounts/withdraw/:id
Parameters: id (Account id)
Request Body: { "money": <withdrawMoney> }
Description: Withdraw money from a user's cash balance. If insufficient cash, withdraw from credit.
Response: Updated account object.

8. Transfer Money
Endpoint: PUT /api/v1/accounts/transfer
Request Body: { "senderId": <senderAccountId>, "receiverId": <receiverAccountId>, "money": <transferMoney> }
Description: Transfer money from one account to another. If insufficient cash, use credit.
Response: Updated user objects for sender and receiver.

9. Filter Active Users by Cash
Endpoint: GET /api/v1/accounts/filter-active-by-cash/:cash
Parameters: cash (minimum required cash)
Description: Filter accounts based on their cash balance.
Response: Array of accounts.



       