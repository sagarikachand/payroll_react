import React from 'react'
import AutoComplete from '../utility/AutoComplete'

const FieldInput = (props) => {


     let name=props.elementData.config.name
     let change = props.change
    const style = {
        width: '100%',
        padding: '8px 10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
        boxSizing:'border-box',
        marginBottom : '30px'
    }

    const renderFieldTemplate = () => {
        let fieldTemplate = null;
       
        switch (props.elementData.elementType) {
            case 'input':
                fieldTemplate = <input className="app_formField" style={style} 
                                  {...props.elementData.config} 
                                  type={props.elementData.elementType} 
                                  value={props.elementData.value}
                                  onChange ={ ( event ) => change(event , name)}/>
                break;
            
                case 'autoCompleteInput':
                 fieldTemplate= <AutoComplete className="app_formField" config={props.config} style={style}
                 suggestions={[
                    "Alligator(1142)",
                    "Alligator1(1145)",
                    "Alligator2(9897)",
                    "Alligator3",
                    "Alligator4",
                    "Alligator5",
                    "Alligator6",
                    "Bask",
                    "Crocodilian",
                    "Death Roll",
                    "Eggs",
                    "Jaws",
                    "Reptile",
                    "Solitary",
                    "Tail",
                    "Wetlands"
                  ]} />
                break;

                case 'select':
                fieldTemplate =<select style={style}>
                                <option value="#">Select</option>
                                
                                </select>

                break;

            default:
                fieldTemplate = <input className="app_formField" style={style} 
                                  {...props.elementData.config} 
                                  type={props.elementData.elementType} 
                                  value={props.elementData.value}
                                  onChange ={ ( event ) => change(event ,name )} />

        }
    
        return fieldTemplate
    }

    return (
        <div>
           {props.elementData.label ? <div className="app_formField_label">{props.elementData.label}</div>: null  } 
            {renderFieldTemplate()}
        </div>

    )
}


export default FieldInput