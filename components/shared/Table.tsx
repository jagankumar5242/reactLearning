import { useState } from "react";
import Button from "./Button";

interface TableProps {
	header: any[]
	data: any[],
	tableSubmit?: any,
	children?: JSX.Element | JSX.Element[];
}


const Table = ({
    header = [],
    data = [], children, tableSubmit
}: TableProps) =>{
		const [tableBtnDisable] = useState(false); 
		const [buttonMessage] = useState('From Table Button');
		const updateParent = () =>{
			tableSubmit(buttonMessage);
		}
		return (
			<div>
				{children}
				<table>
					<thead>
						<tr>
							{header.map((ele: any) => {
								return (
									<td key={ele.header}>{ele.header}</td> 
								)}  
							)}
						</tr>
					</thead>
					<tbody>
					<tr>
							{data.map((ele: any) => {
								return (
									<td key={ele.label}>{ele.label}</td> 
								)}  
							)}
						</tr>
					</tbody>
				</table>

				<Button label="Table Submit" disabled={tableBtnDisable} handleClick={updateParent}/>

			</div>
		)
}
export default Table;