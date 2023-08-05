// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, updateSearchInput} = props
  const {suggestion} = details

  const onClickSuggest = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-items">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggest}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image-arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
