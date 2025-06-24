-- 🛠️ Step 1: Drop old constraint if it exists
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM pg_constraint
        WHERE conname = 'users_role_check'
    ) THEN
        ALTER TABLE users DROP CONSTRAINT users_role_check;
    END IF;
END$$;

-- ✅ Step 2: Recreate constraint with admin_1 included
ALTER TABLE users ADD CONSTRAINT users_role_check
CHECK (role IN ('admin', 'manager', 'employee', 'admin_1'));

-- 👤 Step 3: Optionally insert an admin_1 user
-- (You can modify or comment this if you want different credentials)
INSERT INTO users (email, password, role)
VALUES ('admin_1@company.com', 'securepass', 'admin_1')
ON CONFLICT (email) DO NOTHING;
