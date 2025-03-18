import express from 'express';
import pg from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());


// PostgreSQL connection
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Restaurant_management_system",
    password:"alamir@po",
    port:5432,
  });
  
db.connect();

// Get all employees
app.post('/employees', async (req, res) => {
    try {
      const { name, password, email, role } = req.body;
      const newEmployee = await db.query(
        'INSERT INTO employees (name, password, email, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, password, email, role]
      );
      res.json(newEmployee.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
  });



// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const allEmployees = await db.query('SELECT * FROM employees');
    res.json(allEmployees.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
// Update an employee
app.put('/employees/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, password, email, role } = req.body;
      const updateEmployee = await db.query(
        'UPDATE employees SET name = $1, password = $2, email = $3, role = $4 WHERE id = $5 RETURNING *',
        [name, password, email, role, id]
      );
      res.json(updateEmployee.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
  });


// Delete an employee
app.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEmployee = await db.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
    res.json(deleteEmployee.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
app.post('/menu', async (req, res) => {
  try {
    const { food_name, Food_Type, Food_Description, price } = req.body;
    const newMenuItem = await db.query(
      'INSERT INTO menu (food_name, Food_Type, Food_Description, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [food_name, Food_Type, Food_Description, price]
    );
    res.json(newMenuItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
// Get all menu items
app.get('/menu', async (req, res) => {
  try {
    const allMenuItems = await db.query('SELECT * FROM menu');
    res.json(allMenuItems.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
// Update a menu item
app.put('/menu/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { food_name, Food_Type, Food_Description, price } = req.body;
    const updateMenuItem = await db.query(
      'UPDATE menu SET food_name = $1, Food_Type = $2, Food_Description = $3, price = $4 WHERE id = $5 RETURNING *',
      [food_name, Food_Type, Food_Description, price, id]
    );
    res.json(updateMenuItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
// Delete a menu item
app.delete('/menu/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMenuItem = await db.query('DELETE FROM menu WHERE id = $1 RETURNING *', [id]);
    res.json(deleteMenuItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});//