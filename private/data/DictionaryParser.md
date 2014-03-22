Download dictionary from http://www.dicts.info/uddl.php. Use TBX format.

Copy TBX XML into

http://xslt.online-toolz.com/tools/xslt-transformation.php

Copy XSLT into the above tool


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="utf-8" indent="no"/>
<xsl:strip-space elements="term"/>

<xsl:template match="/">
<xsl:for-each select="martif/text/body/termEntry">

<xsl:choose>
<xsl:when test="substring(langSet[@xml:lang='L2']/term, string-length(langSet[@xml:lang='L2']/term) - string-length('ti') + 1) = 'ti'">
Verbs.insert({    
  english:"<xsl:value-of select="langSet[@xml:lang='L1']/term"/>",
  baseForm:"<xsl:value-of select="langSet[@xml:lang='L2']/term"/>",
  class:1,
  rnd : Math.random()
});
</xsl:when>
<xsl:otherwise>			
Nouns.insert({    
  english:"<xsl:value-of select="langSet[@xml:lang='L1']/term"/>",
  baseForm:"<xsl:value-of select="langSet[@xml:lang='L2']/term"/>",
  rnd : Math.random()
});
</xsl:otherwise>
</xsl:choose>		
<xsl:text>&#xa;</xsl:text>
</xsl:for-each>
</xsl:template>						
</xsl:stylesheet>

						
Copy into the mongo load script (or server db load code)


Deploy to mongodb