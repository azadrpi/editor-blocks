/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, ColorPalette } = wp.editor;
const { PanelBody, PanelColor, TextControl, SelectControl, RangeControl, ToggleControl } = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			setAttributes
		} = this.props;

		const { contentWidth, contentPaddingTop, contentPaddingBottom, imageWidth, featureLayout, headingColor, subHeadingColor, textColor, showButton, buttonBackgroundColor, buttonColor, buttonText, buttonURL, imagePosition, imagePaddingTop, imagePaddingBottom } = attributes;

		return (
			<InspectorControls key="inspector">
			<PanelBody initialOpen={ true } title={ __( 'Layout Settings' ) }>
				<SelectControl
					label={ __( 'Image Position' ) }
					value={ imagePosition }
					onChange={ ( imagePosition ) => setAttributes( { imagePosition } ) }
					options={ [
						{ value: 'left', label: 'Left' },
						{ value: 'right', label: 'Right' },
					] }
				/>
				</PanelBody>
				<PanelBody initialOpen={ false } title={ __( 'Content Settings' ) }>
					<RangeControl
						label={ __( 'Content Width (%)' ) }
						value={ contentWidth }
						onChange={ ( contentWidth ) => setAttributes( { contentWidth } ) }
						min={ 0 }
		        max={ 100 }
					/>
					<RangeControl
						label={ __( 'Content Padding Top (px)' ) }
						value={ contentPaddingTop }
						onChange={ ( contentPaddingTop ) => setAttributes( { contentPaddingTop } ) }
						min={ 0 }
						max={ 200 }
					/>
					<RangeControl
						label={ __( 'Content Padding Bottom (px)' ) }
						value={ contentPaddingBottom }
						onChange={ ( contentPaddingBottom ) => setAttributes( { contentPaddingBottom } ) }
						min={ 0 }
						max={ 200 }
					/>
				</PanelBody>
				<PanelBody initialOpen={ false } title={ __( 'Image Settings' ) }>
					<RangeControl
						label={ __( 'Image Width (%)' ) }
						value={ imageWidth }
						onChange={ ( imageWidth ) => setAttributes( { imageWidth } ) }
						min={ 0 }
		        max={ 100 }
					/>
					<RangeControl
						label={ __( 'Image Padding Top (px)' ) }
						value={ imagePaddingTop }
						onChange={ ( imagePaddingTop ) => setAttributes( { imagePaddingTop } ) }
						min={ 0 }
		        max={ 200 }
					/>
					<RangeControl
						label={ __( 'Image Padding Bottom (px)' ) }
						value={ imagePaddingBottom }
						onChange={ ( imagePaddingBottom ) => setAttributes( { imagePaddingBottom } ) }
						min={ 0 }
		        max={ 200 }
					/>
				</PanelBody>
				<PanelBody initialOpen={ false } title={ __( 'Button Settings' ) }>
					<ToggleControl
						label={ __( 'Show Button' ) }
						checked={ !! showButton }
						help={ ( checked ) => checked ? __( 'Button is visible.' ) : __( 'Button is not visible.' ) }
						onChange={ ( showButton ) => setAttributes( { showButton } ) }
					/>
					{ showButton && [
						<TextControl
							label={ __( 'Button Text' ) }
							value={ buttonText }
							onChange={ ( buttonText ) => setAttributes( { buttonText } ) }
						/>,
						<TextControl
							label={ __( 'Button URL' ) }
							value={ buttonURL }
							onChange={ ( buttonURL ) => setAttributes( { buttonURL } ) }
						/>
					] }
				</PanelBody>
				<PanelColor title={ __( 'Heading Color' ) } colorValue={ headingColor } initialOpen={ false }>
					<ColorPalette
						label={ __( 'Heading Color' ) }
						value={ headingColor }
						onChange={ ( headingColor ) => setAttributes( { headingColor } ) }
					/>
				</PanelColor>
				<PanelColor title={ __( 'Sub Heading Color' ) } colorValue={ headingColor } initialOpen={ false }>
					<ColorPalette
						label={ __( 'Sub Heading Color' ) }
						value={ subHeadingColor }
						onChange={ ( subHeadingColor ) => setAttributes( { subHeadingColor } ) }
					/>
				</PanelColor>
				<PanelColor title={ __( 'Text Color' ) } colorValue={ textColor } initialOpen={ false }>
					<ColorPalette
						label={ __( 'Text Color' ) }
						value={ textColor }
						onChange={ ( textColor ) => setAttributes( { textColor } ) }
					/>
				</PanelColor>
				{ showButton && [
					<PanelColor title={ __( 'Button Text Color' ) } colorValue={ buttonColor } initialOpen={ false }>
						<ColorPalette
							label={ __( 'Button Text Color' ) }
							value={ buttonColor }
							onChange={ ( buttonColor ) => setAttributes( { buttonColor } ) }
						/>
					</PanelColor>,
					<PanelColor title={ __( 'Button Background Color' ) } colorValue={ buttonBackgroundColor } initialOpen={ false }>
						<ColorPalette
							label={ __( 'Button Background Color' ) }
							value={ buttonBackgroundColor }
							onChange={ ( buttonBackgroundColor ) => setAttributes( { buttonBackgroundColor } ) }
						/>
					</PanelColor>
				] }

			</InspectorControls>
		);
	}
}
