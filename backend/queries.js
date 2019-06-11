const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

// USERS FUNCTIONS

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}


const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}


const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
}


// PET FUNCTIONS
const getPets = (request, response) => {
    pool.query('SELECT * FROM pets ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getPetById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM pets WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createPet = (request, response) => {
    const { name, beatmap, locationx, locationy, roam, velocity } = request.body
  
    pool.query('INSERT INTO pets (iname, beatmap, locationx, locationy, roam, velocity) VALUES ($1, $2, $3, $4, $5, $6)', [name, beatmap, locationx, locationy, roam, velocity], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Pet added with ID: ${result.insertId}`)
    })
}


const updatePet = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, beatmap, locationx, locationy, roam, velocity } = request.body
  
    pool.query(
      'UPDATE pets SET iname = $1, beatmap = $2, locationx = $3, locationy = $4, roam = $5, velocity = $6 WHERE id = $7',
      [name, beatmap, locationx, locationy, roam, velocity, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Pet modified with ID: ${id}`)
      }
    )
}


const deletePet = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM pets WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Pet deleted with ID: ${id}`)
    })
}



// RELATIONSHIP FUNCTIONS
const getRelationships = (request, response) => {
    pool.query('SELECT * FROM relationship ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getRelationshipById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        pool.query('SELECT * FROM relationship WHERE user_id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
        if (error) {
            throw error
        }
    })
}

// breed = raca
const createRelationship = (request, response) => {
    const { user_id, pet_id, breed } = request.body
  
    pool.query('INSERT INTO relationship (user_id, pet_id, breed) VALUES ($1, $2, $3)', [user_id, pet_id, breed], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Relationship added with ID: ${result.insertId}`)
    })
}


const updateRelationship = (request, response) => {
    const id = parseInt(request.params.id)
    const { user_id, pet_id, breed } = request.body
  
    pool.query(
      'UPDATE relationship SET user_id = $1, pet_id = $2, breed = $3 WHERE id = $4',
      [user_id, pet_id, breed, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Relationship modified with ID: ${id}`)
      }
    )
}


const deleteRelationship = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM relationship WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Relationship deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
    getRelationships,
    getRelationshipById,
    createRelationship,
    updateRelationship,
    deleteRelationship,
}
  