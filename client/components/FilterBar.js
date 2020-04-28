import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const FilterBar = props => {
  const classes = useStyles()
  const {categories, handleClick, selectedCats} = props
  const [selected, setSelected] = useState(selectedCats)

  const handleCatClick = (evt, id) => {
    evt.preventDefault()
    if (selected.length === 0) {
      setSelected([...selected, id])
    } else {
      let sel = selected.includes(id)
        ? selected.length === 1
          ? []
          : selected.filter(el => el !== id)
        : [...selected, id]
      setSelected(sel)
    }
    handleClick(evt, id)
  }
  return (
    <div className={`filter-bar-row ${classes.root}`}>
      {categories.map(cat => (
        <Button
          className="filter-bar-btn"
          key={cat.id}
          onClick={evt => handleCatClick(evt, cat.id)}
          variant={selected.includes(cat.id) ? 'contained' : 'outlined'}
        >
          {cat.name.split('-').join(' ')}
        </Button>
      ))}
    </div>
  )
}

export default FilterBar
