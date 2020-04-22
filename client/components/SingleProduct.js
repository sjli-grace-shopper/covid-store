// Add To Cart Button component
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import AddCartItem from 'module'
import {addCartItem} from '../store/reducers/cartReducer'

export const SingleProduct = () => {}

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.campusId
  const getCampus = state.campuses.find(campus => campus.id === id)
  const getStudents = state.students.filter(student => student.campusId === id)
  return {
    campuses: state.campuses,
    campus: getCampus,
    students: getStudents
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  addCartItem: id => dispatch(addCartItem(id, ownProps))
})

export default connect(mapState, mapDispatch)(SingleProduct)
