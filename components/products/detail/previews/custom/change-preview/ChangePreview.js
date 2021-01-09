import React from "react";

export default function ChangePreview(props) {
	return (
		<div style={{ width: "376.8px", height: "560px" }}>
			<div
				style={{
					width: "153.6px",
					height: "295.2px",
					left: "0px",
					top: "0px",
				}}
				className="absolute"
			>
				<img src={props.sleevel} />
			</div>
			<div
				style={{
					width: "75.2px",
					height: "295.2px",
					left: "153.6px",
					top: "0px",
				}}
				className="absolute"
			>
				<img src={props.neckline} />
			</div>
			<div
				style={{
					width: "148px",
					height: "295.2px",
					left: "228.8px",
					top: "0px",
				}}
				className="absolute"
			>
				<img src={props.sleever} />
			</div>
			<div
				style={{
					width: "376.8px",
					height: "264.8px",
					left: "0px",
					top: "294.4px",
				}}
				className="absolute"
			>
				<img src={props.length} />
			</div>
		</div>
	);
}
