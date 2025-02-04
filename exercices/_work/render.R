# Load necessary library
library(rmarkdown)



# Define the Lua filter path
lua_filter <- "filter.lua"
# Get the absolute path of the Lua filter
lua_filter <- file.path(getwd(), lua_filter)
# Check if the Lua filter exists
if (!file.exists(lua_filter)) {
  stop(paste("Lua filter file not found:", lua_filter))
}

# Create directories if they don't exist

public_corrige_dir <- file.path("../corriges")
public_git_dir <- file.path("../2025-3ICS-POO-Exercices")
public_html_dir <- file.path("../html")

if (!dir.exists(public_git_dir)) {
  stop("Directory not found: 2025-3ICS-POO-Exercices")
}
# List all .Rmd files recursively in the current folder and subfolders
rmd_files <- list.files(pattern = "\\.rmd$", recursive = TRUE)
print(rmd_files)

c_pandoc_args_no_filter <- c(
  "--filter", "pandoc-plantuml",
  "--wrap=none"
)
c_pandoc_args_lua_filter <-  c(
  "--filter", "pandoc-plantuml",
  "--lua-filter", lua_filter,
  "--wrap=none"
)

# Render each .Rmd file to both PDF and Markdown formats
for (file in rmd_files) {
  # Read the YAML header of the Rmd file
  yaml_header <- rmarkdown::yaml_front_matter(file)
  # Determine the output formats based on the YAML header
  output_formats <- yaml_header$produce

  output_pdf_dir <- file.path(public_corrige_dir, dirname(file)) 
  output_md_dir <- file.path(public_git_dir, dirname(file)) 
  output_html_dir <- file.path(public_html_dir, dirname(file))

  print(output_formats)
  # Render or copy the file based on the specified output formats
  if (!is.null(output_formats$pdf)) {
    if (!dir.exists(output_pdf_dir)) {
      dir.create(output_pdf_dir, recursive = TRUE)
    }
    # Render to PDF with Lua filter
    render(file,
      output_format = pdf_document(
        pandoc_args =
          if (output_formats$pdf$remove_answers) {
            c_pandoc_args_lua_filter
          } else {
            c_pandoc_args_no_filter
          }
      ),
      output_dir = output_pdf_dir
    )
    cat("Rendered to PDF with filter:", file, "\n")
    Sys.sleep(1)
  }

  if (!is.null(output_formats$md)) {
    if (!dir.exists(output_md_dir)) {
      dir.create(output_md_dir, recursive = TRUE)
    }

    # Render to Markdown with Lua filter
    render(file,
      output_format = md_document(
        variant = "markdown",
        pandoc_args =
          if (output_formats$md$remove_answers) {
            c_pandoc_args_lua_filter
          } else {
            c_pandoc_args_no_filter
          },
      ),
      output_dir = output_md_dir
    )
    Sys.sleep(1)
    cat("Rendered to Markdown with filter:", file, "\n")

  }

  if (!is.null(output_formats$html) ) {
    if (!dir.exists(output_html_dir)) {
      dir.create(output_html_dir, recursive = TRUE)
    }
    render(file,
      output_format = html_document(toc = TRUE, pandoc_args =
          if (output_formats$html$remove_answers) {
            c_pandoc_args_lua_filter
          } else {
            c_pandoc_args_no_filter
          }
      ),
      output_dir = output_html_dir
    )
    Sys.sleep(1)
  }
}


# For all .md files (no .rmd) copy them too into public_git_dir folder
md_files <- list.files(pattern = "\\.md$", recursive = TRUE)

print(md_files)

# Move each .md file to the public_git_dir folder
for (file in md_files) {
  destination <- file.path(public_git_dir, file)
  destination_dir <- dirname(destination)
  if (!dir.exists(destination_dir)) {
    dir.create(destination_dir, recursive = TRUE)
  }
  file.copy(file, destination, overwrite = TRUE)
  cat("Moved .md file to:", destination, "\n")
}