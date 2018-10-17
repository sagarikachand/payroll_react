import React, { Component, Fragment } from "react";

import './AutoComplete.css'


class Autocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: "",
            //What user selected
            userSelection: "",

       
        };
    }

    onChange = e => {
        const suggestions = this.props.suggestions;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            userSelection: ""
        });
    };

    onClick = e => {
        e.stopPropagation()
        e.preventDefault()
        console.log('onClick' ,e)
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
            userSelection: e.currentTarget.innerText
        });
    };

    onKeyDown = e => {
        const {  filteredSuggestions } = this.state;
        let {activeSuggestion}=this.state
        
        // User pressed the enter key
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion],
                userSelection: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          
            if(activeSuggestion===0){
                this.setState({activeSuggestion : filteredSuggestions.length -1},this.scrollDiv)
               return
            }
       
          
            this.setState({ activeSuggestion: activeSuggestion - 1 },this.scrollDiv);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            
            if (activeSuggestion === filteredSuggestions.length -1) {
                this.setState({activeSuggestion : 0},this.scrollDiv)
                return;
              }
        
              this.setState({ activeSuggestion: activeSuggestion + 1 },this.scrollDiv);
        }

      
    };

    scrollDiv(){
        console.log("scroll")
      let node = document.querySelector(`ul.suggestions li:nth-child(${this.state.activeSuggestion+1})`)
     let  nodeHeight =  node.clientHeight
      let nodePos =nodeHeight*(this.state.activeSuggestion+1)
      let ulNode=document.querySelector(`ul.suggestions`)
      let ulNodeHeight= ulNode.clientHeight;

      console.log("BEfore")

      console.log(nodePos , 'nodePos')
      console.log(ulNode.scrollTop , 'ulNode.scrollTop')
     
  
      if(nodePos - ulNode.scrollTop  > ulNodeHeight-10 ){
          ulNode.scrollTop = nodePos - ulNodeHeight+10  
      }else if(nodePos -20 <= ulNode.scrollTop) {
          console.log(ulNode.scrollTop)
          console.log(nodePos)
          ulNode.scrollTop= nodePos - nodeHeight

      }


    }

    onBlur = e => {
        console.log("blur")
        if (this.state.userSelection === "") {
            this.setState({
              activeSuggestion: 0,
              filteredSuggestions: [],
              showSuggestions: false,
              userInput: '',
      
            });
          }
    };

    render() {

        const onChange = this.onChange
        const onClick = this.onClick
        const onKeyDown = this.onKeyDown
        const onBlur = this.onBlur

        const activeSuggestion = this.state.activeSuggestion
        const filteredSuggestions = this.state.filteredSuggestions
        const showSuggestions = this.state.showSuggestions
        const userInput = this.state.userInput


        let suggestionsListComponent;

        if (showSuggestions && userInput.length >=3) {
          
            if (filteredSuggestions.length) {
            
                suggestionsListComponent = (
                    <ul className="suggestions" >
                        {filteredSuggestions.map((suggestion, index) => {
                            
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }
                            
                            return (
                                <li className={className} key={suggestion}   onMouseDown={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                // suggestionsListComponent = (
                //   <div class="no-suggestions">
                //     <em>No suggestions, you're on your own!</em>
                //   </div>
                // );
            }

        
        }

        return (
            <Fragment>
                <input
                    {...this.props.config}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    onBlur={onBlur}
                    className={this.props.className}
                    style={this.props.style}
                />
                {suggestionsListComponent}
            </Fragment>
        );
    }
}

export default Autocomplete;
