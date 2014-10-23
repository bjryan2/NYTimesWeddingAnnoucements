/** @jsx React.DOM */

var React = require('react/addons');

var CodeBlock = require('../code_block.jsx');
var Content = require('../content.jsx');
var Annotation = require('../annotation.jsx');
var TextBlock = require('../text_block.jsx');
var PaperHeader = require('../header_paper.jsx')
var SectionHeader = require('../header_section.jsx');
var Chart = require('../chart.jsx');
var Citation = require('../citation.jsx');
var Bibliography = require('../bibliography.jsx');
var ToggleModeButton = require('../toggle_mode_button.jsx');

var ThesisPage = React.createClass({

  render: function() {
    return (
      <h1>

      <ToggleModeButton
      linkTarget={'analysis'}
      linkText={"Read the Analysis"}
      />
      THESIS PAGE </h1>
      );
  }
});

module.exports = ThesisPage;