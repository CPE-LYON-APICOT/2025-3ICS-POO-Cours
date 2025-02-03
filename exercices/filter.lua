function remove_blockquotes(blocks)
  local inside_blockquote = false
  local result = {}

  for _, block in ipairs(blocks) do
    if block.t == "RawBlock" and block.text:match("<article>") then
      inside_blockquote = true
      table.insert(result, pandoc.RawBlock("html", "<blockquote>"))
      table.insert(result, "Réponse : ")
    end

    if not inside_blockquote then
      table.insert(result, block)
    end

    if inside_blockquote and block.t == "RawBlock" and block.text:match("</article>") then
      inside_blockquote = false
      table.insert(result, pandoc.RawBlock("html", "</blockquote>"))
    end
  end

  return result
end

-- Applying the filter to the Pandoc document
function Pandoc(doc)
  if FORMAT:match 'md' then
    doc.blocks = remove_blockquotes(doc.blocks)
  end
  return doc
end
-- Base64 encoding function
local function base64_encode(data)
  local b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  return (data:gsub(".", function(x)
      local r, b = "", string.byte(x)
      for i = 8, 1, -2 do
          r = r .. b64:sub((b >> i) & 0x3F + 1, (b >> i) & 0x3F + 1)
      end
      return r
  end))
end



