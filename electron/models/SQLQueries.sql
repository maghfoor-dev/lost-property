--to create lost items table
CREATE TABLE lost_items (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Date TEXT DEFAULT CURRENT_DATE,
  ItemName TEXT,
  Details TEXT,
  LostArea TEXT,
  PersonName TEXT,
  AimsID TEXT,
  PhoneNumber TEXT,
  ItemFound BOOLEAN DEFAULT false
);

-- mock data for lost_items
INSERT INTO lost_items (ItemName, Details, LostArea, PersonName, AimsID, PhoneNumber)
VALUES
  ('Wallet', 'Black leather bi-fold wallet with ID and credit cards', 'Coffee shop', 'John Smith', 12345, '555-123-4567'),
  ('Keys', 'Silver house key, car key, and office key', 'Parking lot', 'Jane Doe', 54321, '555-987-6543'),
  ('Phone', 'iPhone X with black case and cracked screen', 'Bus station', 'Alex Lee', 67890, '555-555-1212');

--to create found items table
CREATE TABLE found_items (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  FoundDate TEXT DEFAULT CURRENT_DATE,
  ItemName TEXT,
  Details TEXT,
  LostArea TEXT,
  Returned boolean default false,
  ReturnedBy TEXT,
  ReturnDate TEXT
);

-- mock data for found_items
INSERT INTO found_items (ItemName, Details, LostArea) VALUES ('iPhone', 'Black case, cracked screen', 'Main Street');
INSERT INTO found_items (ItemName, Details, LostArea) VALUES ('Wallet', 'Brown leather, contains ID and credit cards', 'Central Park');
INSERT INTO found_items (ItemName, Details, LostArea) VALUES ('Keys', 'Gold keychain, includes house key and car key', 'Downtown');
INSERT INTO found_items (ItemName, Details, LostArea) VALUES ('Sunglasses', 'Aviator style, polarized lenses', 'Shopping Mall');
