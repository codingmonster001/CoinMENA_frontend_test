import { Dropdown, DropdownButton, FormControl } from "react-bootstrap";
const styles = {
    filter: {
        display: 'flex',
        marginLeft: '20px',
        alignItems: 'center',
        cursor: 'pointer'

    },
    title: {
        marginRight: '5px',
    }
};
const CustomToggle = function (props: any) {
    return (
        <div style={styles.filter}
            onClick={(e) => {
                e.preventDefault();
                props.onClick(e);
            }}>
            {props.children}
            <span style={{ fontSize: "12px" }}>&#x25bc;</span>
        </div>
    );
}
function FilterDropdown(props: any) {
    return (
        <Dropdown>
            <div style={styles.filter}>
                <Dropdown.Toggle as={CustomToggle} >
                    <div style={styles.title}>{props.title}:</div>
                    <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Any</span>
                </Dropdown.Toggle>
            </div>
            <Dropdown.Menu >
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterDropdown;
