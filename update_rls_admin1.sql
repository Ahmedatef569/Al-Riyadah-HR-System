

-- 🛡️ Corrected RLS policies for admin_1 access control
-- RLS policy for employees
CREATE POLICY "Allow access for roles: admin, admin_1"
ON employees
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin', 'admin_1')
  )
);

-- RLS policy for leaves
CREATE POLICY "Allow access for roles: admin, admin_1"
ON leaves
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin', 'admin_1')
  )
);

-- RLS policy for excuses
CREATE POLICY "Allow access for roles: admin, admin_1"
ON excuses
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin', 'admin_1')
  )
);

-- RLS policy for overtime
CREATE POLICY "Allow access for roles: admin, admin_1"
ON overtime
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin', 'admin_1')
  )
);

-- RLS policy for penalties
CREATE POLICY "Allow access for roles: admin, admin_1"
ON penalties
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin', 'admin_1')
  )
);

-- RLS policy for salaries
CREATE POLICY "Allow access for roles: admin"
ON salaries
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin')
  )
);

-- RLS policy for payroll
CREATE POLICY "Allow access for roles: admin"
ON payroll
FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM users u
    WHERE u.email = current_setting('request.jwt.claim.email', true)
    AND u.role IN ('admin')
  )
);

